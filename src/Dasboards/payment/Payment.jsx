import { loadStripe } from "@stripe/stripe-js";
import Hadlines from "../../componets/Hadlines";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe('pk_test_51OEAXTFSdPUsKpuTCPVL2kSpTFSpYORfZWuvoW3PeVixQF2PD8EyxYW2a51ureWZj29gE60yB5e2EkYQwCvNi7R800Yx6jtjN3');
const Payment = () => {
    return (
        <div>
            <Hadlines heading={'Please Pay To Eat'} subHeading={'Payment'}></Hadlines>
            <div className="">
                <Elements stripe={stripePromise}>
              <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;