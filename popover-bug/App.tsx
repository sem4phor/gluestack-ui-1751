import { config } from '@gluestack-ui/config';
import { Box, Button, ButtonGroup, ButtonText, CloseIcon, GluestackUIProvider, Heading, Icon, Popover, PopoverBackdrop, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, Text } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';
import { useState } from 'react';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}

const Home = () => {
  return <Container />;
};

const PopoverDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      placement="top"
      offset={500}
      size="md" 
      trigger={(triggerProps) => {
        return (
          <Button
            {...triggerProps}
          >
            <ButtonText>
              Popover
            </ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop/>
      <PopoverContent>
        <PopoverHeader>
          <Heading size='lg'>Welcome!</Heading>
          <PopoverCloseButton>
            <Icon as={CloseIcon}/>
          </PopoverCloseButton>
        </PopoverHeader>
        <PopoverFooter>
          <Text size='xs' flex={1}>
            Step 2 of 3
          </Text>
          <ButtonGroup space='md'>
            <Button variant="outline" action='secondary' onPress={handleClose}>
              <ButtonText>Back</ButtonText>
            </Button>
            <Button onPress={handleClose}>
              <ButtonText>Next</ButtonText>
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}


const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      sx={{
        _web: {
          flex: 1,
        },
      }}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        {/* <Image source={iconSvg} alt="document" width={22} height={22} /> */}
        <Text>
          <IconSvg />
        </Text>
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};

const Container = () => {
  return (
    <Box flex={1} backgroundColor="$black">
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box
          position="absolute"
          sx={{
            '@base': {
              h: 500,
              w: 500,
            },
            '@lg': {
              h: 700,
              w: 700,
            },
          }}
        >
          <Gradient />
        </Box>
        <Box
          height="60%"
          sx={{
            '@base': {
              my: '$16',
              mx: '$5',
              height: '80%',
            },
            '@lg': {
              my: '$24',
              mx: '$32',
            },
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            bg="#64748B33"
            py="$2"
            px="$6"
            rounded="$full"
            alignItems="center"
            marginTop={20}
            sx={{
              '@base': {
                flexDirection: 'column',
              },
              '@sm': {
                flexDirection: 'row',
              },
              '@md': { alignSelf: 'flex-start' },
            }}
          >
            <Text color="$white" fontWeight="$normal">
              Get started by editing
            </Text>
            <Text color="$white" fontWeight="$medium" ml="$2">
              App.tsx
            </Text>
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Logo />
          </Box>

          <PopoverDemo />
          
          <Box
            sx={{
              '@base': {
                flexDirection: 'column',
              },
              '@md': {
                flexDirection: 'row',
              },
            }}
          >
            <FeatureCard
              iconSvg={DocumentData}
              name="Docs"
              desc="Find in-depth information about gluestack features and API."
            />
            <FeatureCard
              iconSvg={LightBulbPerson}
              name="Learn"
              desc="Learn about gluestack in an interactive course with quizzes!"
            />
            <FeatureCard
              iconSvg={Rocket}
              name="Deploy"
              desc="Instantly drop your gluestack site to a shareable URL with vercel."
            />
          </Box>
          <PopoverDemo />
        </Box>
      </ScrollView>
    </Box>
  );
};
