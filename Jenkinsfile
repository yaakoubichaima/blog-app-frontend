pipeline {
    // agent {
    //     docker {
    //         image 'node:14'
    //         args '-u root'
    //     }
    // }
    stages {
        stage('Checkout') {
            steps {
                checkout scm 
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        // stage('Unit tests') {
        //     steps {
        //         sh 'npm run test'
        //     }
        // }
    }
}
