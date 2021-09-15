import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import {
  SideNavigation,
  Section,
  NavigationHeader,
  Header,
  NestableNavigationContent,
  ButtonItem,
  NestingItem,
  Footer,
  NavigationFooter,
} from '@atlaskit/side-navigation';
import {
    PageLayout,
    Main,
    Content,
    RightSidebar,
    LeftSidebar,
    LeftSidebarWithoutResize,
    RightPanel,
    LeftPanel,
    Banner,
    TopNavigation
  } from '@atlaskit/page-layout';

  type WrapperProp = {
        borderColor: string;
        children: React.ReactNode;
        minHeight?: string;
        noOutline?: boolean;
        noHorizontalScrollbar?: boolean;
      
  }

export default function AtlasKitPage() {
    const Wrapper = ({
        borderColor,
        children,
        minHeight,
        noOutline,
        noHorizontalScrollbar,
      }: WrapperProp) => (
        <div
          css={{
            outline: noOutline ? 'none' : `2px dashed ${borderColor}`,
            outlineOffset: -4,
            padding: 8,
            minHeight: minHeight,
            height: '100%',
            boxSizing: 'border-box',
            overflowY: 'auto',
            overflowX: noHorizontalScrollbar ? 'hidden' : 'auto',
            backgroundColor: 'white',
          }}
        >
          {children}
        </div>
      );

    return (
        <Page>
 <PageLayout>
  <TopNavigation>test</TopNavigation>
  <LeftPanel><SideNavigation label="project">
  <NavigationHeader>
    <Header>NXTGen Industries</Header>
  </NavigationHeader>
  <NestableNavigationContent>
    <Section>
      <ButtonItem>Your work</ButtonItem>
    </Section>
  </NestableNavigationContent>
  <NavigationFooter>
    <Footer>You're in a next-gen project</Footer>
  </NavigationFooter>
</SideNavigation></LeftPanel>   
    </PageLayout>
  
        </Page>
      );
    }

