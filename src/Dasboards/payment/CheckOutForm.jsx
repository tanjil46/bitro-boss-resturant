import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";


const CheckOutForm = () => {
const stripe=useStripe()
const elements=useElements()
const[errors,setError]=useState('')
const[clientSecret,setSecretClient]=useState('')
const[transitionId,setTransationId]=useState('')
const axiosSecure=useAxios()
const[cart]=useCart()
const Totalprice=(cart.reduce((sum,carts)=>sum+carts.price,0))

const{user}=useAuth()

useEffect(()=>{
axiosSecure.post('/create-payment-intent',{price:Totalprice})
.then(res=>{
    console.log(res.data)
    setSecretClient(res.data.clientSecret)
})








},[])










const formHandler=async(event)=>{
    event.preventDefault();
 if(!stripe || !elements) {
    return
 }
  const card=elements.getElement(CardElement)

if(card==null){
    return
}

const{error,paymentMethod}=await stripe.createPaymentMethod({
type:'card',
card

})
if(error){
    console.log('Payment Error',error)
    setError(error.message)
}
else{
    console.log('Payment method',paymentMethod)
    setError('')
}

 const{paymentIntent,error:confrimError}=await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
        card:card,
        billing_details:{
         email:user.email,
         name:user.displayName

        }
    }
 })

if(confrimError){
    console.log('confrim payment error',confrimError)
}else{
    console.log('confrim payment intent',paymentIntent)
    if(paymentIntent==='succeeded'){
       setTransationId(paymentIntent.id)
    }
}


}








    return (
        <div>
            <form onSubmit={formHandler}>


            <CardElement
    options={{
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }}
  />
  <button className="btn btn-sm bg-slate-500 my-6" type="submit" disabled={!stripe || !clientSecret }>
    Pay
  </button>



            </form>
            <p className="text-center text-red-500">{errors}</p>
            {transitionId && <p className="text-center text-green-500">Your transition Id:{transitionId}</p> }
        </div>
    );
};

export default CheckOutForm;