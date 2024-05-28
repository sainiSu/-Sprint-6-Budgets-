import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import services from "../data/ServiceData";
import Header from "./Header";
import TotalPrice from "./TotalPrice";
import WebsiteData from "../data/WebData";
import { Link } from 'react-router-dom';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

const Checkbox = () => {
    const [options, setOptions] = useState({
        seo: false,
        ads: false,
        web: false
    });

    const [pages, setPages] = useState(0);
    const [languages, setLanguages] = useState(0);
    const [budgets, setBudgets] = useState([]);
    const [webPopUp, setWebPopUp] = useState(false);
    const [isAnnual, setIsAnnual] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        //Parse URL parameters

        const params = new URLSearchParams(location.search);
        setOptions({
            seo: params.get('CampaingSeo') === 'true',
            ads: params.get('CampaingAds') === 'true',
            web: params.get('WebPage') === 'true'
        });

        setPages(parseInt(params.get('pages')) || 0);
        setLanguages(parseInt(params.get('lang')) || 0);
        setIsAnnual(params.get('isAnnual') === 'true');
    }, [location.search]);

    const updateURLParams = () => {
        // Update URL based on state changes
        const params = new URLSearchParams();
        params.set('CampaingSeo', options.seo);
        params.set('CampaingAds', options.ads);
        params.set('WebPage', options.web);
        params.set('pages', pages);
        params.set('lang', languages);
        params.set('isAnnual', isAnnual);
        navigate({ search: params.toString() });
    }
    const handleChange = (option) => {
        setOptions(prevOptions => {
            const newOption = {
                ...prevOptions,
                [option]: !prevOptions[option]
            };

            //for popup


            if (option === 'web' && !prevOptions.web) {
                setWebPopUp(true);
            }
            return newOption;
        });
    };

    updateURLParams();

    const handleIncrement = (field) => {
        if (field === 'pages') {
            setPages(prevPages => prevPages + 1);
        } else if (field === 'languages') {
            setLanguages(prevLanguages => prevLanguages + 1);
        }
    };

    const handleDecrement = (field) => {
        if (field === 'pages') {
            setPages((prevPages => (prevPages > 0 ? prevPages - 1 : 0)))

        } else if (field === 'languages') {
            setLanguages(prevLanguages => (prevLanguages > 0 ? prevLanguages - 1 : 0));
        }
    }


    const calculateTotal = () => {
        let total = services.reduce((total, service) => {
            return options[service.title.toLowerCase()] ? total + service.price : total;
        }, 0);

        if (options.web) {
            total += (pages + languages) * 30
        }


        //update for discount

        if (isAnnual) {
            total *= 0.8
        }


        return total;
    };

    const total = calculateTotal();

    const addBudget = (budgetDetails) => {
        const newBudget = {
            ...budgetDetails,
            services: Object.keys(options).filter(option => options[option]),
            total: total,
            date: new Date().toString(),
            id: budgets.length + 1,
        };
        setBudgets((prevBudgets) => [...prevBudgets, newBudget]);
    };

    const handleToggleAnnual = () => {
        setIsAnnual(!isAnnual);
    }
    return (
        <div className="container mx-auto p-6 relative">
            <br />

            <Link to="/" className="absolute top-3 right-3">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-5">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
            </Link>

            <Header />

            <br />
            <br />

            <div className="flex justify-center">

                <label className="label cursor-pointer gap-5">

                    <span className="font-bold fint-snas text-2xl">Pagament mensual</span>

                    <div className="realtive inline-block -10 mr-2 align-middle select-none transition duratioin-200 ease-in" >
                        <input type="checkbox" className="toggle" checked={isAnnual} onChange={handleToggleAnnual} ></input>
                    </div>

                    <span className="font-bold fint-snas text-2xl">Pagament anual</span>

                </label>

            </div>

            {services.map((service) => {
                const discountedPrice = isAnnual ? service.price * 0.8 : service.price;
                return (
                    <div key={service.id} className="mx-auto md:w-5/6 shadow-xl md:p-10 rounded-3xl my-8 border duration-500">

                        <div className="flex items-center flex-col md:flex-row md:text-start text-center">
                            <div className="md:w-2/5 flex flex-col justify-center items-center md:items-start">

                                <h2 className="font-bold text-4xl md:mt-3 mt-5 md:text-start text-center">{service.title} </h2>
                                <p className="my-5 md:my-0 font-semibold text-xl"> {service.description}</p>

                            </div>
                            <span className="translate-x-5 text-4xl font-bold">
                                {discountedPrice} €
                                {isAnnual && <span className="text-red-500 text-lg"> (Now 20% discount)</span>}
                            </span>                    </div>

                        <label className="label cursor-pointer justify-end gap-2">
                            <input
                                className="checkbox border-emerald-700 [--chkbg:theme(colors.emerald.700)]" type="checkbox" id={service.title.toLowerCase()} onChange={() => handleChange(service.title.toLowerCase())} />
                            <span className="font-semibold text-xl">Afegir</span>
                        </label>

                        <br />

                        {service.title.toLowerCase() === "web" && options.web && (
                            <WebsiteData pages={pages} languages={languages} setPages={setPages} setLanguages={setLanguages} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                        )}

                    </div>
                );
            })}

            <footer className="flex justify-between font-bold mt-6">
                <TotalPrice total={total} isAnnual={isAnnual} />

                <Link to='/'><button className=" font-serif btn btn-outline btn-success">Home</button></Link>

            </footer>

            <BudgetForm addBudget={addBudget} />
            <BudgetList budgets={budgets} />

            {webPopUp && (

                <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">

                    <div className="bg-white font-serif border rounded p-4 w-1/3">

                        <h2 className="text-lg font-bold text-center mb-2">Número de Paginas y llenguatges</h2>
                        <br />

                        <p>Afegeix les llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30€.</p>

                        <br />

                        <button className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setWebPopUp(false)} >Close</button>

                    </div>

                </div>
            )}

        </div>
    );
}


export default Checkbox;
