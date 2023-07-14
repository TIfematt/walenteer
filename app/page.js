import Cards from "@/components/Cards"

export default function Home() {
  const Balance = (props) => {
    return (
      <div className='flex flex-col'>
        <span className='text-white uppercase text-base font-medium'>
          {props.title}
        </span>
        <span className='text-white uppercase text-base font-extrabold'>
          ${props.amount}
        </span>
      </div>
    )
  }
  return (
    <main className="main-section h-screen">
      <section className="primaryGradient h-[21rem] w-screen  ">
        <div className='pt-[7rem] ml-[5.44rem] flex gap-[4.62rem]'>
          {Balance({
            title: 'Overall',
            amount: '22,127.00'
          })}
          <div className="h-8 w-[1px] bg-white relative top-[8px]"/>
          {Balance({
            title: 'Services',
            amount: '42,447.00'
          })}
          <div className="h-8 w-[1px] bg-white relative top-[8px]"/>
          {Balance({
            title: 'Website',
            amount: '51,480.00'
          })}
          <div className="h-8 w-[1px] bg-white relative top-[8px]"/>
          {Balance({
            title: 'Investment',
            amount: '21,700.00'
          })}
        </div>
      </section>
      <section>
          
      </section>
    </main>
  )
}
