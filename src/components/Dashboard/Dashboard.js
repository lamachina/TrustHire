import { Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import CardComponent from './Dash'
import Finder from './Finder'
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function Dashboard() {

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    return (
        <Flex pt={24}
            w='90%' flexDirection='column' alignItems='center' >
            <Tabs isFitted w='100%' variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>MY DASHBOARD</Tab>
                    <Tab>FIND USERS</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel >
                        <Heading mb={8}>MY DASHBOARD</Heading>
                        {isConnected ?
                            <CardComponent />
                            :
                            <button type="button">
                                Open Account Modal
                            </button>}
                    </TabPanel>
                    <TabPanel>
                        <Finder />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default Dashboard