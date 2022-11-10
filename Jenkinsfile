pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/vihsilvadacosta/testeebac-ui.git'
            }
        }
    }
    stages {
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
    }
    stages {
        stage('Executar os testes') {
            steps {
                sh 'npm cy:run'
            }
        }
    }
}
