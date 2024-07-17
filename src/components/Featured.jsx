const Featured = () => {
  return (
    <div className=" h-screen w-screen">
      <div className="flex flex-col  justify-center gap-y-4 py-6">
        <div className=" text-xs flex items-center justify-center">
          AS FEATURED IN
        </div>
        <div className="flex  items-center justify-between px-4 mr-2">
          <div>VOGUE</div>
          <div>BRIDES</div>
          <div>THE NEW YORK TIMES</div>
          <div>COSMOPOLITAN</div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
