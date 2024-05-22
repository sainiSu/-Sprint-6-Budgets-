import { useState } from "react";
import services from "../data/ServiceData";
import Header from "./Header";
import TotalPrice from "./TotalPrice";
import WebsiteData from "../data/WebData";
import { Link } from 'react-router-dom'


const Checkbox = () => {
    const [options, setOptions] = useState({
        seo: false,
        ads: false,
        web: false
    });
    const [pages, setPages] = useState(1);
    const [languages, setLanguages] = useState(1);


    const handleChange = (option) => {
        setOptions(prevOptions => ({
            ...prevOptions,
            [option]: !prevOptions[option]
        }));
    };
    const handleIncrement = (field) => {
        if (field === 'pages') {
            setPages(pages + 1);
        } else if (field === 'languages') {
            setLanguages(languages + 1);
        }
    };

    const handleDecrement = (field) => {
        if (field === 'pages') {
            if (pages > 1) {
                setPages(pages - 1)
            }
        } else if (field === 'languages') {
            if (languages > 1) {
                setLanguages(languages - 1)
            }
        }
    };

    const calculateTotal = () => {
        let total = services.reduce((total, service) => {
            return options[service.title.toLowerCase()] ? total + service.price : total;
        }, 0);
        if (options.web) {
            total += (pages + languages) * 30
        }
        return total;
    };

    const total = calculateTotal();

    return (
        <div className="container mx-auto p-6 relative">
            <br />
        <Link to="/" className="absolute top-4 left-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-5">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
        </Link>
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
                    <br />
                    {service.title.toLowerCase() === "web" && options.web && (
                        <WebsiteData pages={pages} languages={languages} setPages={setPages} setLanguages={setLanguages} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                    )}
                </div>
            ))}
            <footer className="flex justify-between font-bold mt-6">
                <TotalPrice total={total} />
                <Link to='/'><button className="btn btn-outline btn-success">Back to Home</button></Link>
            </footer>
        </div>
    );
}

export default Checkbox;
