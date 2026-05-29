import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

function App() {
  const packages = [
    {
      name: 'Базовий',
      price: '$9.99',
      period: '/ місяць',
      description: 'Стартовий пакет для невеликих задач і знайомства з продуктом.',
      features: ['Функція 1', 'Функція 2', 'Функція 3'],
      imageUrl: 'https://picsum.photos/seed/basic/500/300',
      buttonText: 'Вибрати базовий',
    },
    {
      name: 'Преміум',
      price: '$19.99',
      period: '/ місяць',
      description: 'Оптимальний пакет для активного користування та розвитку проєкту.',
      features: ['Функція 1', 'Функція 2', 'Функція 3', 'Функція 4'],
      imageUrl: 'https://picsum.photos/seed/premium/500/300',
      buttonText: 'Вибрати преміум',
      popular: true,
    },
    {
      name: 'Бізнес',
      price: '$29.99',
      period: '/ місяць',
      description: 'Рішення для бізнесу з розширеним набором можливостей.',
      features: ['Функція 1', 'Функція 2', 'Функція 3', 'Функція 4', 'Функція 5'],
      imageUrl: 'https://picsum.photos/seed/business/500/300',
      buttonText: 'Вибрати бізнес',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component="h1"
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Наш продукт
          </Typography>

          <Button color="inherit" href="#features">
            Переваги
          </Button>

          <Button color="inherit" href="#pricing">
            Ціни
          </Button>

          <Button color="inherit" href="#contacts">
            Контакти
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(https://picsum.photos/seed/hero/1600/900)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'common.white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h2"
            variant="h3"
            sx={{ mb: 2, fontWeight: 700 }}
          >
            Ласкаво просимо до нашого продукту!
          </Typography>

          <Typography variant="h6" sx={{ mb: 4, color: 'grey.200' }}>
            Інноваційне рішення для вашого бізнесу, яке допоможе працювати
            швидше, ефективніше та впевненіше.
          </Typography>

          <Button variant="contained" size="large" href="#pricing">
            Переглянути тарифи
          </Button>
        </Container>
      </Box>

      <Container component="main" maxWidth="lg" sx={{ py: 6 }}>
        <Box id="features" sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{ mb: 2, fontWeight: 700 }}
          >
            Чому обирають нас
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 650, mx: 'auto' }}
          >
            Простий інтерфейс, гнучкі тарифи та корисні можливості для щоденної
            роботи.
          </Typography>
        </Box>

        <Box id="pricing" sx={{ scrollMarginTop: 24 }}>
          <Grid container spacing={4} sx={{ width: '100%' }}>
            {packages.map((pkg) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={pkg.name}>
                <Card
                  elevation={pkg.popular ? 6 : 2}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    borderRadius: 3,
                  }}
                >
                  {pkg.popular && (
                    <Chip
                      label="Популярний"
                      color="primary"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontWeight: 600,
                      }}
                    />
                  )}

                  <CardMedia
                    component="img"
                    height="170"
                    image={pkg.imageUrl}
                    alt={pkg.name}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      component="h3"
                      variant="h5"
                      sx={{ mb: 1, fontWeight: 700 }}
                    >
                      {pkg.name}
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="baseline"
                      spacing={1}
                      sx={{ mb: 2 }}
                    >
                      <Typography
                        component="p"
                        variant="h4"
                        color="primary"
                        sx={{ fontWeight: 700 }}
                      >
                        {pkg.price}
                      </Typography>

                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {pkg.period}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {pkg.description}
                    </Typography>

                    <List dense disablePadding>
                      {pkg.features.map((feature) => (
                        <ListItem key={feature} disableGutters>
                          <ListItemText primary={`✓ ${feature}`} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>

                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      variant={pkg.popular ? 'contained' : 'outlined'}
                      fullWidth
                    >
                      {pkg.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box
        id="contacts"
        component="footer"
        sx={{
          py: 3,
          textAlign: 'center',
          bgcolor: 'primary.main',
          color: 'common.white',
        }}
      >
        <Typography variant="body2">
          © 2026 Наш продукт. Усі права захищені.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
