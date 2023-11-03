import React, { ReactNode } from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  background-color: #a7a4b9;
  /* Outros estilos */
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
