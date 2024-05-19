
const TotalPrice = ({total}) => {
    return (
        <div className="md:w-5/6 mx-auto flex md:flex-row flex-col justify-center md:justify-end md:gap-12 my-20 items-center md:items-baseline">
            <p className="md:text-start text-center text-4xl font-bold md:mb-0 mb-6">
                Preu pressupostat:
            </p>
            <p className="text-5xl font-extrabold md:ms-20">
                {total} €
            </p>
        </div>
    );
};

export default TotalPrice;
