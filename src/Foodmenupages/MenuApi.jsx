import Menu from "../Homepage/Menu";


const MenuApi = ({items}) => {
    return (
        <div className="p-12">
            <div className="grid md:grid-cols-2 gap-8 p-10 mt-12">
                {
                    items.map(menu=><Menu menu={menu}></Menu>)
                }
             </div>
        </div>
    );
};

export default MenuApi;