import React from "react";
import ConsultantLayout from "../../layout/ConsultantLayout";
import ConsultantClient from "../../components/consultant/ConsultantClient";
import ConsultantChat from "../../components/consultant/ConsultantChat";

function Clients() {
    return (
        <ConsultantLayout>
            <ConsultantClient/>
        </ConsultantLayout>
    );
}

export default Clients;
