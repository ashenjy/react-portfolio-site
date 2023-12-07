import {
  Box,
  Stack,
  Text,
  Card,
  CardBody,
  Heading,
  Divider,
  List,
  ListItem,
  Icon,
  HStack,
  Flex,
  Container,
  CardHeader,
  Button,
  Badge,
  Center,
  Grid,
  SimpleGrid
} from "@chakra-ui/react";

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

  return (
    <>
      <Box maxW="6xl" mx="auto" py={12} id="services">
        <Heading mb={10} textAlign="center">
          Services Offered
        </Heading>
        <Stack spacing={10}>
        <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {servicesData.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <Heading >{service.title}</Heading>
                </CardHeader>
                <CardBody align="left">
                  <Text pb="15px">
                    {service.description}
                  </Text>
                  <HStack flexWrap="wrap" spacing={2} >
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
                  {/* <Button border="1px solid" color="#007BFF" bg="#FFF" ml="20px" mb="10px">No, do not grant</Button> */}
                  <Button bg="#007BFF" color="#FFF" mb="10px" mr="5px">Book A Call</Button>
                </Flex>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </>
  );
}

