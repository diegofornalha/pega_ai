import Landing from '../components/Landing'

export default function Home(props) {
  return (
    <>
      <div className="container mx-auto max-w-[920px] px-6 sm:px-8 md:px-12">
        <Landing user={props.user} auth={props.auth}/>
      </div>
    </>
  )
}
