import React from "react";
import { Button } from "../ui/button";
import { AlignJustify, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser, resetTokenAndCredentials } from "@/store/auth-slice";
import { useNavigate } from "react-router-dom";

const Adminheader = ({ setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    // dispatch(logoutUser());
    dispatch(resetTokenAndCredentials());
    sessionStorage.clear();
    navigate("/auth/login");
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button className="lg:hidden sm:block" onClick={() => setOpen(true)}>
        <AlignJustify />
        <span className="sr-only">Toggle menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="gap-2 items-center px-4 py-2 text-sm font-medium shadow"
        >
          Logout
          <LogOut />
        </Button>
      </div>
    </header>
  );
};

export default Adminheader;
