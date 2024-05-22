import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">

      <img src=".\src\components\welcome.png" alt="Welcome" className="max-w-xs h-auto my-4 mx-auto welcome-image animate-bounce" />

      <h3 className='mb-8 text-xl text-wrap text-neutral-950 font-bold font-serif'>Budget Calculation App</h3>

      <div className='mb-5'>On this web page you can calculate the Budget of different sevices along with discounts also you can pay the amount in the installments (mothly/annually).You can calculte the total of sevices easily.Click the link below and enjoy the sevices.</div>

      <Link to={'/calculator'} className='btn btn-info bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>Click Here</Link>
      
    </div>
  )
}
