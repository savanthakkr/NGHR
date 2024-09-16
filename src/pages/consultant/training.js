import React from "react";
import ConsultantLayout from "../../layout/ConsultantLayout";
import ConsultantTraining from "../../components/consultant/ConsultantTraining";

function DashboardPage() {
    return (
        <ConsultantLayout>
            <ConsultantTraining/>
        </ConsultantLayout>
    );
}

export default DashboardPage;
