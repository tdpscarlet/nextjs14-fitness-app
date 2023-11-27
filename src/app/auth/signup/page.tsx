import SignUpForm from "@/components/Auth/SignUpForm";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center mt-10 gap-5">
        <span className="text-[34px] leading-[44px] tracking-[0.0025em] font-bold text-[--primary]">
          Sign <span className="text-[--secondary]">Up</span>
        </span>
        <SignUpForm />
      </div>
    </>
  );
};

export default page;
