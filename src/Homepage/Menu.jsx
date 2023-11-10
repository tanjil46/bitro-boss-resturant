

const Menu = ({menu}) => {
    const{name,recipe,image,price}=menu
    console.log(menu)
    return (
        <div className="flex gap-6">
            <img className="w-[120px] rounded-t-lg rounded-s-2xl border-t-full" src={image}></img>
            <div className="">
                <h1 className="uppercase">{name}............</h1>
                <h2>{recipe}</h2>
               
            </div>
            <div className="">
            <p className="text-yellow-500">$ {price}</p>
            </div>
        </div>
    );
};

export default Menu;