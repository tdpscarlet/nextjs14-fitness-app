import LogInForm from "@/components/Auth/LogInForm";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center mt-10 gap-5">
        <span className="text-[34px] leading-[44px] tracking-[0.0025em] font-bold text-[--primary]">
          Log <span className="text-[--secondary]">In</span>
        </span>
        <LogInForm />
      </div>
    </>
  );
};

export default page;
