import React from 'react';
import {gql, useQuery} from '@apollo/client';
import Flex from "mineral-ui/Flex";
import Link from "mineral-ui/Link";
import Text from "mineral-ui/Text";
import Box from 'mineral-ui/Box';
import { PrimaryNav, NavItem } from 'mineral-ui/Navigation';
import { ThemeProvider } from 'mineral-ui/themes';



const QUERY = gql`
    query Workflow($id: ID!)     {
        workflow(id:$id) {
            id,
            flows{
                id
                __typename
                ... on DemoFlowA {
                    list
                }
                ... on DemoFlowB {
                    name
                    description
                }
            }
        }
    }
`;


function Loading() {
    return (<div>loading</div>);
}

function Empty() {
    return (        <Flex alignItems="center" height="100vh" justifyContent="center" padding="lg">
        <Text as="h1">
            <Link href="https://mineral-ui.com">Mineral UI</Link>
        </Text>
    </Flex>);
}

function Error() {
    return (        <Flex alignItems="center" height="100vh" justifyContent="center" padding="lg">
        <Text as="h1">
            <Link href="https://mineral-ui.com">Mineral UI</Link>
        </Text>
    </Flex>);
}

export default function DemoPage(props) {
    console.log(props);
    const {id} = props.match.params;
    console.log("ID", id);
    const {loading, error, data} = useQuery(QUERY, {
        variables: {id: id},
    });

    return (
        <ThemeProvider>
            <div>
                <Box><PrimaryNav>
                    <NavItem href="/malachite">Malachite</NavItem>
                    <NavItem selected href="/fluorite">Fluorite</NavItem>
                    <NavItem href="/magnetite">Magnetite</NavItem>
                </PrimaryNav></Box>
                <Box>

                </Box>
            </div>
        </ThemeProvider>
    );
}
