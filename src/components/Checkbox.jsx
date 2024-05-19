import  { useState } from "react";
import services from "../data/ServiceData";
import Header from "./Header";
import TotalPrice from "./TotalPrice";

const Checkbox = () => {
    const [options, setOptions] = useState({
        seo: false,
        ads: false,
        web: false
    });

    const handleChange = (option) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            [option]: !prevOptions[option]
        }));
    };

    const calculateTotal = () => {
        return services.reduce((total, service) => {
            return options[service.title] ? total + service.price : total;
        }, 0);
    };

    const total = calculateTotal();

    return (
        <div className="container mx-auto p-6">
            <Header />
            {services.map((service) => (
                <div key={service.id} className="mx-auto md:w-5/6 shadow-xl md:p-10 rounded-3xl my-8 border duration-500">
                    <div className="flex items-center flex-col md:flex-row md:text-start text-center">
                        <div className="md:w-2/5 flex flex-col justify-center items-center md:items-start">
                            <h2 className="font-bold text-4xl md:mt-3 mt-5 md:text-start text-center">
                                {service.title}
                            </h2>
                            <p className="my-5 md:my-0 font-semibold text-xl">
                                {service.description}
                            </p>
                        </div>
                            <span className="translate-x-5 text-4xl font-bold">{service.price} €</span>
                    </div>
                    <label className="label cursor-pointer justify-end gap-2">
                        <input
                            className="checkbox border-emerald-500 [--chkbg:theme(colors.emerald.500)]"
                            type="checkbox"
                            id={service.title}
                            checked={options[service.title]}
                            onChange={() => handleChange(service.title)}
                        />
                        <span className="font-semibold text-xl">Afegir</span>
                    </label>
                </div>
            ))}
            <footer className="flex justify-between font-bold mt-6">
                <TotalPrice total={total} />
            </footer>
        </div>
    );
}

export default Checkbox;
