

export const NotFound = () => {//{msg}:{msg?:string}
  
  return(
    <div className="h-screen flex flex-col items-center justify-center">

      <title>404 Not Found</title>

    <h2 className="font-semibold text-2xl mb-3">Page Not Found.</h2>
    <h4 className="font-medium text-base mb-5">
      The page you're looking for does not exist or has moved.
    </h4>
    <a href={'/'} className="hover:underline text-lime-600">Go back home &rarr;</a>

  </div>
  )

}