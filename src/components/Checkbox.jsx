import  { useState } from "react";
import services from "../data/ServiceData";
import Header from "./Header";
import TotalPrice from "./TotalPrice";
import WebsiteData from "../data/WebData";


const Checkbox = () => {
    const [options, setOptions] = useState({
        seo: false,
        ads: false,
        web: false
    });
    const [pages , setPages] = useState(1);
    const [languages , setLanguages] = useState(1);


    const handleChange = (option) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            [option]: !prevOptions[option]
        }));
    };

    const calculateTotal = () => {
        let total = services.reduce((total, service) => {
            return options[service.title.toLowerCase()] ? total + service.price : total;
        }, 0);
        if(options.web){
            total+= (pages + languages)*30
        }
        return total;
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
                                {service.title.toLowerCase()}
                            </h2>
                            <p className="my-5 md:my-0 font-semibold text-xl">
                                {service.description}
                            </p>
                        </div>
                            <span className="translate-x-5 text-4xl font-bold">{service.price} €</span>
                    </div>
                    <label className="label cursor-pointer justify-end gap-2">
                        <input
                            className="checkbox border-emerald-700 [--chkbg:theme(colors.emerald.700)]"
                            type="checkbox"
                            id={service.title.toLowerCase()}
                            checked={options[service.title.toLowerCase()]}
                            onChange={() => handleChange(service.title.toLowerCase())}
                        />
                        <span className="font-semibold text-xl">Afegir</span>
                    </label>
                    <br/>
                    {service.title.toLowerCase() === "web" && options.web &&(
                        <WebsiteData pages = {pages}  languages={languages} setPages={setPages} setLanguages ={setLanguages}/>
                    )}
                </div>
            ))}
            <footer className="flex justify-between font-bold mt-6">
                <TotalPrice total={total} />
            </footer>
        </div>
    );
}

export default Checkbox;
