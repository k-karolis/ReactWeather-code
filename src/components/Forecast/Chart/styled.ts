import styled from "styled-components";

export const ChartContainer = styled.div`
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.forecastPanelBgColor};
    color: ${({ theme }) => theme.panelTitleColor};
    font-weight: 500;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 1.5rem 2rem;
    overflow: hidden;
`;
