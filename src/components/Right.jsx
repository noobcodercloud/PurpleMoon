import react, { useEffect, useState, useMemo } from "react"

function Right() {

    const api_key = import.meta.env.VITE_API_KEY;

    const [Quote, setQuote] = useState('Example Quote')
    const [Meaning, setMeaning] = useState('Meaning')
    const [HindiName, setHindiName] = useState('Hindi Name')
    const [EnglishName, setEnglishName] = useState('English Name')
    const [Summary, setSummary] = useState("Summary")
    const [Loaded, setLoaded] = useState(false)


    useEffect(() => {
        const genRandomQuote = async () => {
            const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': api_key,
                    'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
                }
            };
            let randomNumber = Math.floor(Math.random() * 18); // 0 to 17
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setHindiName(result[randomNumber].name);
                setEnglishName(result[randomNumber].name_translated);
                setMeaning(result[randomNumber].name_meaning);
                setSummary(result[randomNumber].chapter_summary);
                setLoaded(true);

            } catch (error) {
                console.error(error);
            }
        };

        genRandomQuote();
    }, []);



    return (
        <div className='h-full w-full p-2'>
            <div className='h-full w-full p-2 bg-linear-to-b from-purple-700/50 to-purple-700/70 rounded-3xl shadow-[0_10px_50px_rgba(88,28,135,0.9),0_5px_25px_rgba(88,28,135,0.7)]'>
                <div className='flex items-center justify-center w-full h-full bg-linear-to-b from-purple-600/80 to-purple-900 p-3 rounded-2xl'>
                    {
                        !Loaded &&
                        <div className="text-center text-xl sm:text-3xl font-bold">
                            LOADING THE CHAPTER...
                        </div>
                    }
                    {
                        Loaded &&
                        <div className="w-full h-full p-1 font-poppins flex flex-col">
                            <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row justify-between py-5 px-1">
                                <div className="text-center underline underline-offset-2">
                                    {HindiName}
                                </div>
                                <div className="text-center underline underline-offset-2">
                                    {EnglishName}
                                </div>
                            </div>
                            <div className="text-center sm:text-2xl 2xl:text-3xl font-bold py-5">
                                {Meaning}
                            </div>
                            <div className="sm:p-5 md:pb-50 pb-5 text-center my-auto text-sm md:text-[16px] 2xl:text-2xl">
                                {Summary}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Right
