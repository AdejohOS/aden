import { CircuitBoard, Antenna, Settings } from "lucide-react";

const Values = () => {
    return ( 
        <section className="container  pt-24 pb-24">
            <div>
                <h1 className="text-xl md:text-3xl font-bold">
                    ADEN&#39;s <span className="text-green-700 border-b p-2 border-green-500">Core Values </span>
                </h1>
                <p className="mt-4 text-slate-500">Dive into a  world of great possibilities. </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 gap-4">
                    <div className="bg-slate-50 rounded-md flex flex-col items-center justify-center space-y-4 p-4 shadow">
                        <Settings className="h-10 w-10 text-green-300 hover:animate-spin"/>
                        <h2 className="font-semibold text-slate-500">Bridging the Gap of Excellence</h2>
                        <p className="text-slate-500 text-center">Lorem ipsum dolor, sit amet consectetur </p>
                    </div>
                    <div className="bg-slate-50 rounded-md flex flex-col items-center justify-center space-y-4 p-4 shadow">
                        <Antenna className="h-10 w-10 text-green-300 hover:animate-spin"/>
                        <h2 className="font-semibold text-slate-500">Bridging the Gap of Excellence</h2>
                        <p className="text-slate-500 text-center">Lorem ipsum dolor, sit amet consectetur </p>
                    </div>
                    <div className="bg-slate-50 rounded-md flex flex-col items-center justify-center space-y-4 p-4 shadow">
                        <CircuitBoard className="h-10 w-10 text-green-300 hover:animate-spin"/>
                        <h2 className="font-semibold text-slate-500">Bridging the Gap of Excellence</h2>
                        <p className="text-slate-500 text-center">Lorem ipsum dolor, sit amet consectetur </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Values;