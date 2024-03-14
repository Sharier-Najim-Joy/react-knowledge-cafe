import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='container mx-auto flex justify-between items-center border-b-2 py-2'>
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;