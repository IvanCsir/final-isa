#!/usr/bin/env groovy

pipeline {
    agent any
    environment {
        // Define variables de entorno
        DOCKER_HUB_REPO = 'ivancsir/dockerhub'
        DOCKER_HUB_CREDENTIALS = 'dockerhub-login'  // Configura esto en Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio
                git branch: '*/main', url: "https://github.com/IvanCsir/final-isa.git"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Construye la imagen Docker
                    dockerImage = docker.build("${env.DOCKER_HUB_REPO}:${env.BUILD_ID}")
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    // Autenticarse en Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', "${env.DOCKER_HUB_CREDENTIALS}") {
                        // Empuja la imagen a Docker Hub
                        dockerImage.push()
                    }
                }
            }
        }
    }
    post {
        always {
            // Limpia el espacio de trabajo después de la ejecución
            cleanWs()
        }
    }
}

