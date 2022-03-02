import "./../style/pages/ContactPage.css";
import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Loading from "./../sub-components/Loading";

function ContactPage() {
  return (
    <div className="ContactPage">
      <Loading />
    </div>
  );
}

export default ContactPage;
