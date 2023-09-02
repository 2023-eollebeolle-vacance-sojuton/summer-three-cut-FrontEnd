import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyles from "../../../styles/GlobalStyles";
import Header from "../Header";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export default function Provider({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <Container>
            <Wrapper>{children}</Wrapper>
          </Container>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 104px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
`;

export const Wrapper = styled.div`
  width: 1370px;
  height: 100%;
  background-color: #fff;
`;
