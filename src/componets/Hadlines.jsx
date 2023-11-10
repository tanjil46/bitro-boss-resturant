

const Hadlines = ({heading,subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto">
            <p className="text-orange-500 text-center mt-4">{heading}</p>
            <h1 className=" text-3xl my-5 text-center border-y-4">{subHeading}</h1>
        </div>
    );
};

export default Hadlines;