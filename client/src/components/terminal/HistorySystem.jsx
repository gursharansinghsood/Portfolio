const HistorySystem = ({ history }) => {
    return (

        history.length > 0 && history.map((item) => (
            <div className='flex flex-col mb-5'>
                <div className='flex items-center gap-2'>
                    <p className='text-success font-bold'>GursharanSinghSood@Portfolio: </p>
                    <p>
                        {item.command}
                    </p>
                </div>
                <p className="whitespace-pre-wrap">
                    {item.output}
                </p>
            </div>
        ))

    )
}

export default HistorySystem