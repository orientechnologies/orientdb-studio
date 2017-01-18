#!groovy
node("master") {
    def mvnHome = tool 'mvn'
    def mvnJdk8Image = "orientdb/mvn-gradle-node-zulu-jdk-8"

    stage('Source checkout') {
        checkout scm
    }

    stage('Run tests on Java8') {
        docker.image("${mvnJdk8Image}").inside("${env.VOLUMES}") {

            sh "${mvnHome}/bin/mvn  versions:set -DnewVersion=${env.RELEASE_VERSION}"
            sh "${mvnHome}/bin/mvn  versions:commit"
            sh "${mvnHome}/bin/mvn  clean install deploy -DperformRelease=true -DskipTests=true -DcreateChecksum=true -Psonatype"

        }
    }

}

