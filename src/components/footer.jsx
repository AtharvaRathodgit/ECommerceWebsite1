function Row({info}){
    return(
        <div className="flex flex-col">
            <h1 className="border-b border-b-slate-400 inline-block font-light pb-2">
                {info.headline}
            </h1>

            <ul
                className="flex flex-col font-semibold gap-3 py-3"
            >
                {info.ListItems.map((item, index) => (
                    <a href={item.link} key={index}>
                        {item.text}
                    </a>
                ))}
            </ul>
        </div>
    )
}


function RowBox(){
    let rows = [
        {
            headline: "About",
            ListItems: [
                { text: "About Us", link: "#" },
                { text: "Contact Us", link: "#" },
                { text: "Careers", link: "#" },
                { text: "FAQs", link: "#" },
                { text: "Press", link: "#" },
                { text: "Media Enquiries", link: "#" },
            ],
        },
        {
            headline: "Support",
            ListItems: [
                { text: "Delivery", link: "#" },
                { text: "Payments", link: "#" },
                { text: "Returns", link: "#" },
                { text: "Trade", link: "#" },
            ],
        },
        {
            headline: "Consumer Policy",
            ListItems: [
                { text: "Cancellation & Returns", link: "#" },
                { text: "Terms Of Use", link: "#" },
                { text: "Security", link: "#" },
                { text: "Privacy", link: "#" },
                { text: "Corporate Information", link: "#" },
            ],
        },
    ];



    return(
        <div className="flex flex-row justify-between w-[600px] h-full">
            {rows.map((rowInfo, index) => (
                <Row info={rowInfo} key={index}/>
            ))}
        </div>
    )
}


function SocialRow({list}){
    return(
        <div
            className="flex flex-row w-full items-center gap-10"
        >
            {list.map((item, index) => (
                <a href={item.link}>
                    <img
                        src={item.logoUrl}
                        alt={item.text}
                        className="h-5 w-5"
                    />
                </a>
            ))}
        </div>
    )
}

function ContactBox(){
    function submitForm(e) {
        e.preventDefault(); // Prevent page reload
        // Do nothing else
    }


    let SocialLinks = [
        { text: "Facebook", link: "#", logoUrl : '/src/imageFiles/SocialMediaImages/Facebook.png' },
        { text: "Instagram", link: "#", logoUrl : '/src/imageFiles/SocialMediaImages/Instagram.png' },
        { text: "X (Twitter)", link: "#", logoUrl : '/src/imageFiles/SocialMediaImages/X.png' },
        { text: "Pinterest", link: "#", logoUrl : '/src/imageFiles/SocialMediaImages/Pinterest.png' },
        { text: "Youtube", link: "#", logoUrl : '/src/imageFiles/SocialMediaImages/Youtube.png' },
        { text: "LinkedIn", link: "#", logoUrl : '/src/imageFiles/SocialMediaImages/Linkedin.png' },
    ];

    return(
        <div className="px-20 border-l border-l-slate-400 flex flex-col w-[700px] justify-between">
            {/* <Row info={SocialLinks} /> */}

            <div className="inline w-full">
                <h1 className="text-4xl font-semibold">
                    Discover more with <p className="font-serif italic inline">Minimal</p>
                </h1>

                <p className="py-5">
                    Stay updated with the latest launches, expert tips, exclusive offers, and insider news from the world of laptops, mobile devices, and PC components. Sign up now and get 10% off your first purchase!
                </p>

                <form
                    onSubmit={submitForm}
                    className="flex flex-row items-center gap-3"
                >
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-slate-400 rounded-md px-4 py-2 w-full inline focus:outline-none focus:shadow-md focus:border-slate-600 "
                    />
                    <button
                        type="submit"
                        className=" bg-slate-800 text-white px-4 py-2 rounded-md w-[250px] hover:bg-slate-900 shadow-sm hover:shadow-md cursor-pointer"
                    >
                        Submit
                    </button>
                </form>                
            </div>

            <SocialRow list={SocialLinks}/>
        </div>
    )
}

function OtherInformation(){
    return(
        <div
            className="w-full border-t border-t-slate-400 flex flex-row justify-between"
        >
            <p>Designed and built using <b>React</b>, <b>Vite</b>, and <b>Tailwind CSS</b> </p>
            <p>©2025 <a href="https://github.com/AtharvaRathodgit" target="_blank" className="hover:underline">AtharvaRathodgit</a>. All rights reserved.</p>
        </div>
    )
}


function Footer(){
    return(
        <div className="bg-slate-200 w-full h-[500px] flex flex-row">
            <div className="w-full flex flex-col justify-center items-center gap-20">
                <div className="w-[1400px] flex flex-row justify-between">
                    <RowBox />
                    <ContactBox />
                </div>

                <div className="w-[1400px] flex flex-row">
                <OtherInformation />
                </div>
            </div>            
        </div>
    )
}

export default Footer;