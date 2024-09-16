
const Navbar = () => {
    return (
      <div className="h-20 flex flex-col sm:flex-row space-y-2 justify-around p-5 ">
        <div className="flex">
          <img src="image.png" className="h-12"/>
        </div>
        <div className="flex space-x-2 ">
          <button className="bg-[#2e3241] px-5 rounded-lg">INR</button>
          <button className="bg-[#2e3241] px-5 rounded-lg">BTC</button>
          <button className="bg-[#2e3241] px-5 rounded-lg">BUY-BTC</button>
        </div>
        <div className="flex">
        <button className="bg-[#3dc6c1] px-5 rounded-lg">Connect Telegram</button>
        </div>
      </div>
    )
}

export default Navbar
