pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm 
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm i -f'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
