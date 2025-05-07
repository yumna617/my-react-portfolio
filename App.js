// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material';

import Header from './layout/Header';
import Footer from './layout/Footer';
import SideNav from './layout/SideNav';

import { PageTitleProvider } from './context/PageTitleContext';

// Lazy-loaded pages
const Home = lazy(() => import('./Pages/Home'));
const Education = lazy(() => import('./Pages/Education'));
const Projects = lazy(() => import('./Pages/Projects'));
const Skills = lazy(() => import('./Pages/Skills'));
const Contact = lazy(() => import('./Pages/Contact'));

function App() {
  return (
    <Router>
      <PageTitleProvider>
        <Header />
        <Box sx={{ display: 'flex' }}>
          <SideNav />
          <Container component="main" sx={{ 
            flexGrow: 1,
            p: 3,
            marginTop: '64px', // To account for the header height
          }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Container>
        </Box>
        <Footer />
      </PageTitleProvider>
    </Router>
  );
}

export default App;