pipeline {
        agent {
            docker {
                image 'jenkins/agent:jdk17' // Usa una imagen de Jenkins con Docker preinstalado
                args '-v /var/run/docker.sock:/var/run/docker.sock'
            }
        }

    environment {
        DOCKERHUB_CREDENTIALS = 'dockerhub-login'
        DOCKERHUB_REPO = 'ivancsir/dockerhub:ulitima'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/ivancsir/final-isa.git', credentialsId: 'dockerhub-login']]])
                }
            }
        }
        stage('Build Application') {
            steps {
                script {
                    // Comando para construir la aplicación
                    sh './mvnw clean package -DskipTests'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Revisa si el Dockerfile está en el directorio correcto.
                    sh 'ls -al'

                    // Construye la imagen Docker.
                    sh "docker build -t $DOCKERHUB_REPO -f .devcontainer/Dockerfile ."
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub
                    withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    }
                    // Push the image
                    sh "docker push $DOCKERHUB_REPO"
                }
            }
        }
    }
}
