import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-customBackground p-4'>
      <div className='container mx-auto flex justify-start items-center space-x-6'>
        <div className=" text-lg font-bold text-customTextColor">LOGO</div> 
        <div className="space-x-6">
            <Link href="/" className="text-customTextColor hover:text-customTextColor hover-glow" > Home </Link>
            <Link href="/categories" className="text-customTextColor hover:text-customTextColor hover-glow">Categories</Link>
            <Link href="/About Us" className="text-customTextColor hover:text-customTextColor hover-glow">About Us</Link>
        </div>
        <div>
          <input
            type='text'
            placeholder='Search'
            className='px-12 py-2 rounded-full bg-customSearchBar text-customTextColor placeholder-customTextColor opacity-50 focus:ring-1 focus:ring-customTextColor'
          />
        </div>

      </div>
    </div>
  );
}
