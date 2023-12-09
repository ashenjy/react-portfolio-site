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
  SimpleGrid,
  List,
  ListItem,
  ListIcon
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
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Services({ color }) {

  const servicesData = [
    {
      title: "Camunda BPMN (Java)",
      description: `Process Engine Development`,
      services: [
        "BPMN diagram design.",
        "Custom process development.",
        "Camunda Engine Security.",
        "Camunda Migration v7 - v8.",
        "Proof of concept design / develop."
      ],
      technologies: ["Camunda v7/8", "BPMN Standard", "JAVA"],
    }
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
      <Container maxW={"3xl"} id="services">
        <HStack mx={4} mb={10}>
          <Text color={`${color}.400`} fontWeight={800}>
            03
          </Text>
          <Text fontWeight={800}>Services</Text>
          <Text fontWeight={800}>Offered</Text>
          <Divider orientation="horizontal" />
        </HStack>
        {/* <Stack align="center" direction="row" p={4}> */}
        {/* <Box bg='black' maxW="3xl" mx="auto" py={6} > */}
        <Stack spacing={10} mb={30}>
          <SimpleGrid columns={[1, 2]} px={4} spacing={8} >
            {servicesData.map((service) => (
              <Card key={service.title} >
                <CardHeader>
                  <Text fontSize="xl" fontWeight={600}>{service.title}</Text>
                </CardHeader>
                <CardBody align="left" mt={-4}>
                  <Text fontSize="md" pb={5}>
                    {service.description}
                  </Text>
                  <Flex pb={6}>
                    <List align="left" spacing={0}>
                      {service.services.map((item, index) => (
                        <ListItem key={index} fontSize="sm">
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Flex>
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
                  <Button size="sm" mb="10px" mr="5px" onClick={onOpen}>Book A Call</Button>
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
        {/* </Box> */}
        {/* </Stack> */}
      </Container>
    </>
  );
}

