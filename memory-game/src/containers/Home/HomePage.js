import React from "react";
import { Dashboard, DashboardMenu, DashboardButtons } from "../../Components";

const HomePage = () => (
  <Dashboard>
    <DashboardMenu title="Joj da Memoria">
     <DashboardButtons to="/game">Iniciar joj</DashboardButtons>
    </DashboardMenu>
  </Dashboard>
);

export default HomePage;
