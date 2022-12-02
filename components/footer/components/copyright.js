const Copyright = () => {
    const year = new Date();
    return (
        <>
            <div className='h-full w-11/12 mt-4'>
                <p className='sm:w-56 lg:full text-sm text-footerSecondColor'>
                    Grupa Fewaterm {year.getFullYear()} ©. Wszystkie prawa zastrzeżone.
                </p>
            </div>
        </>
    );
}
export default Copyright;