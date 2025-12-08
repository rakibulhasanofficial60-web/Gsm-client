// import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full ">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default CommonLayout;
