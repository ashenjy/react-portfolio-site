import {
  Box,
  Stack,
  Text,
  Card,
  CardBody,
  Divider,
  Icon,
  HStack,
  Flex,
  Container,
  CardHeader,
  Button,
  Badge,
  SimpleGrid
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import ConfigsArray from "./ConfigsArray";
import ConfigKeys from "../ConfigKeys";


export default function Services({ color }) {

  const servicesData = [
    {
      title: "Web Development",
      icon: <Icon name="Computer" />,
      description: "Build dynamic and responsive websites with modern technologies.",
      technologies: [
        "ReactJS",
        "NextJS",
        "VueJS",
        "Tailwind CSS",
        "Chakra UI",
      ],
    },
    {
      title: "Mobile App Development",
      icon: <Icon name="Mobile" />,
      description: "Create user-friendly mobile apps for iOS and Android platforms.",
      technologies: ["React Native", "Flutter", "Kotlin", "Swift"],
    },
    {
      title: "API Development",
      icon: <Icon name="Server" />,
      description: "Build secure and scalable APIs for your applications.",
      technologies: ["NodeJS", "Express", "Django", "Flask"],
    },
    {
      title: "DevOps and Cloud Services",
      icon: <Icon name="Cloud" />,
      description: "Automate your deployments and manage your applications in the cloud.",
      technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure()

  const configs = ConfigsArray();

  const getCalendlyUrl = (configs) => {
    // Iterate through the array and find the calendlyUrl
    for (const config of configs) {
      if (ConfigKeys.CALENDLY_URL in config) {
        return config.calendlyUrl;
      }
    }
  
    // Return a default value or handle the case where calendlyUrl is not found
    return null;
  };
  
  const calendlyUrl = getCalendlyUrl(configs);

  return (
    <>
      <Container maxW={"6xl"} id="services">
        <Box maxW="6xl" mx="auto" py={12} >
          <HStack mx={4} mb={10}>
            <Text color={`${color}.400`} fontWeight={800}>
              03
            </Text>
            <Text fontWeight={800}>Services Offered</Text>
          </HStack>
          <Divider orientation="horizontal" mx={4} mb={10} />
          <Stack spacing={10}>
            <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
              {servicesData.map((service) => (
                <Card key={service.title}>
                  <CardHeader>
                    <Text fontSize="xl" fontWeight={600}>{service.title}</Text>
                  </CardHeader>
                  <CardBody align="left" mt={-2}>
                    <Text pb="15px">
                      {service.description}
                    </Text>
                    <HStack flexWrap="wrap" spacing={2} mb={2} >
                      {service.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          colorScheme="red"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </HStack>
                  </CardBody>
                  <Flex justifyContent={"flex-end"} gap="45px">
                    <Button mb="10px" mr="5px" onClick={onOpen}>Book A Call</Button>
                    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Calendly</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Text mb={2}>Please wait a second for calendly to load the schedule page.</Text>
                          <iframe
                            src={calendlyUrl}
                            title="Calendly Event"
                            width="100%"
                            height="500px"
                            frameBorder="0"
                          ></iframe>
                        </ModalBody>

                        <ModalFooter>
                          <Button mr={3} onClick={onClose}>
                            Close
                          </Button>
                          {/* <Button variant='ghost'>Secondary Action</Button> */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Flex>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
        </Box></Container>
    </>
  );
}

