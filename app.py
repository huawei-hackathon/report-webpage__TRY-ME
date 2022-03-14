import requests
import flask

app = flask.Flask(__name__, static_url_path='/static', template_folder='templates')

@app.route('/generateReport', methods=['POST'])
def generateReport():
    data = flask.request.get_json()
    caregiverUserId = data['caregiverUserId']

    # generate a 12 character reportUUID on server, and log into DB
    # DB(reportUUID, caregiverUserId, datetime.now())

@app.route('/getReport/<reportUUID>', methods=['GET'])
def getReport(reportUUID):
    # query server for reportUUID, valid is it exists and within the expiration time.

    valid = True # this is just for my testing

    if valid == True:
        # NOTE: for all of the lists, we need to ensure that it is either length 28 or 30 or 31

        # REFER TO DATATYPE.txt

        heartRateAnomaly = [95,108]
        stepCountAnomaly = [5000,7500]
        stepAsymmetryAnomaly = [5,7]
        sleepTimeAnomaly = [8,10.1]

        heartRateList=[97, 109, 104, 107, 94, 98, 96, 93, 101, 109, 98, 90, 106, 99, 91, 97, 104, 90, 99, 103, 90, 110, 97, 94, 94, 101, 91, 106, 107, 95, 103]
        
        stepsList=[6869, 4430, 6471, 3305, 5604, 4196, 4028, 6165, 5460, 3464, 4264, 6391, 7897, 4917, 3962, 5551, 4210, 5009, 6078, 4491, 7890, 3561, 6339, 3470, 6215, 7790, 7030, 7685, 5829, 4742, 4405]
        
        sleepTimeList=[9.3, 8.7, 9.1, 8.9, 9.3, 7.5, 8.4, 9.1, 8.5, 9.4, 9.8, 8.5, 8.4, 10.0, 9.8, 8.0, 9.9, 8.3, 8.8, 7.7, 7.7, 8.1, 8.3, 7.9, 7.7, 9.5, 8.1, 7.5, 8.7, 8.5, 9.8]
        
        asymmetryList=[7.4, 4.4, 5.4, 4.4, 3.4, 7.4, 8.4, 3.4, 3.4, 5.4, 5.4, 6.4, 7.4, 3.4, 8.4, 5.4, 6.4, 8.4, 5.4, 3.4, 6.4, 5.4, 8.4, 7.4, 3.4, 8.4, 5.4, 3.4, 5.4, 6.4, 3.4]

        ''' GRAPH ANNOTATION FOR ANOMALY '''
        heartRatePoints = [3 if i > heartRateAnomaly[0] and i < heartRateAnomaly[1] else 5 for i in heartRateList]
        print(heartRatePoints)
        heartRatePointColors = ['rgba(78, 115, 223, 1)' if i > heartRateAnomaly[0] and i < heartRateAnomaly[1] else 'rgba(252, 0, 0, 0.8)' for i in heartRateList]

        stepAsymmetryPoints = [3 if i > stepAsymmetryAnomaly[0] and i < stepAsymmetryAnomaly[1] else 5 for i in asymmetryList]
        stepAsymmetryPointColors = ['rgba(78, 115, 223, 1)' if i > stepAsymmetryAnomaly[0] and i < stepAsymmetryAnomaly[1] else 'rgba(252, 0, 0, 0.8)' for i in asymmetryList]

        stepCountColors = ['rgba(78, 115, 223, 1)' if i > stepCountAnomaly[0] and i < stepCountAnomaly[1] else 'rgba(252, 0, 0, 0.8)' for i in stepsList]
        stepCountHighlightColors = ['#2e59d9' if i > stepCountAnomaly[0] and i < stepCountAnomaly[1] else 'rgba(145, 0, 0, 0.8)' for i in stepsList]

        sleepTimeColors = ['rgba(78, 115, 223, 1)' if i > sleepTimeAnomaly[0] and i < sleepTimeAnomaly[1] else 'rgba(252, 0, 0, 0.8)' for i in sleepTimeList]
        sleepTimeHighlightColors = ['#2e59d9' if i > sleepTimeAnomaly[0] and i < sleepTimeAnomaly[1] else 'rgba(145, 0, 0, 0.8)' for i in sleepTimeList]

        foodTableHeaders = ["Food", "Number of Times"]
        foodTableData = [['Food 1', 50], ['Food 2', 30], ['Food 3', 20], ['Food 4', 10], ['Food 5', 5], ['Food 6', 2], ['Food 7', 1]]

        data = {
            "foodTableHeaders": foodTableHeaders,
            "foodTableData": foodTableData,

            "heartRateAnomaly":heartRateAnomaly,
            "stepCountAnomaly":stepCountAnomaly,
            "stepAsymmetryAnomaly":stepAsymmetryAnomaly,
            "sleepTimeAnomaly":sleepTimeAnomaly,
            "heartRatePoints":heartRatePoints,
            "heartRatePointColors":heartRatePointColors,
            "stepAsymmetryPoints":stepAsymmetryPoints,
            "stepAsymmetryPointColors":stepAsymmetryPointColors,

            "stepCountColors":stepCountColors,
            "stepCountHighlightColors":stepCountHighlightColors,
            "sleepTimeColors":sleepTimeColors,
            "sleepTimeHighlightColors":sleepTimeHighlightColors,
            
            "elderlyName": "John Doe",
            "elderlyAge": "42",
            "anomalyDetectionText": "John Doe is feeling very sad. He is not feeling well. He seems to be spending many hours in the toilet compared to previous month. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", # this one just leave something default now since we dont have the model yet
            "datesOfMonth": [i for i in range(1, 32)],
            "month": "January",
            "year": "2022",

            "heartRateList":heartRateList,
            "stepsList":stepsList,
            "sleepTimeList":sleepTimeList,
            "asymmetryList":asymmetryList,

            "bluetoothGraphDatasets": [{
                "label": "Living Room",
                "backgroundColor": "#4e73df",
                "hoverBackgroundColor": "#4e59d9",
                "data": [8.6, 7.0, 11.3, 8.1, 8.4, 9.4, 8.1, 8.8, 8.5, 8.2, 7.4, 8.9, 8.3, 7.8, 8.4, 6.8, 8.7, 6.6, 9.0, 7.3, 5.0, 9.7, 5.1, 4.6, 8.2, 7.9, 4.4, 7.4, 8.3, 6.7, 8.0]
                }, {
                "label": "Bedroom",
                "backgroundColor": "#e74a3b",
                "hoverBackgroundColor": "#A8362C",
                "data": [6.6, 6.9, 6.8, 7.9, 6.5, 6.4, 6.2, 6.3, 6.5, 7.3, 6.6, 7.8, 7.3, 7.3, 7.2, 7.1, 6.5, 7.9, 6.4, 6.7, 7.5, 6.8, 7.8, 7.7, 6.0, 7.4, 7.4, 6.0, 7.3, 6.7, 7.7]
                }, {
                "label": "Bathroom",
                "backgroundColor": "#36b9cc",
                "hoverBackgroundColor": "#247E8C",
                "data": [0.7, 1.7, 0.5, 0.8, 0.5, 1.0, 1.1, 0.8, 0.6, 1.4, 1.0, 1.4, 0.6, 1.0, 1.8, 0.8, 0.7, 1.9, 1.8, 1.7, 1.9, 1.5, 1.9, 1.9, 0.6, 2.0, 1.7, 1.9, 0.5, 1.7, 1.5]
                }, {
                "label": "Kitchen",
                "backgroundColor": "#1cc88a",
                "hoverBackgroundColor": "#13875D",
                "data": [3.4, 3.0, 3.3, 3.8, 3.0, 3.6, 4.1, 4.1, 4.0, 3.3, 3.8, 3.4, 3.6, 4.3, 3.3, 3.3, 3.3, 3.9, 3.9, 3.3, 4.3, 3.4, 3.6, 4.1, 3.5, 3.1, 4.5, 3.8, 3.1, 3.4, 4.3]
                }, {
                "label": "Outside",
                "backgroundColor": "#C0CCC9",
                "hoverBackgroundColor": "#88908E",
                "data": [4.7, 5.4, 2.1, 3.4, 5.6, 3.6, 4.5, 4.0, 4.4, 3.8, 5.2, 2.5, 4.2, 3.6, 3.3, 6.0, 4.8, 3.7, 2.9, 5.0, 5.3, 2.6, 5.6, 5.7, 5.7, 3.6, 6.0, 4.9, 4.8, 5.5, 2.5]
                }
            ],

            "avgSteps": "10,001",
            "avgHeartRate": "104",
            "avgSleepTime": ['8', '10'], # [hours, minutes]
            "avgWalkingAsymmetry": "7.9",

            "dietLabels": ["Carbohydrates", "Vegetable", "Protein", "idk"],
            "dietData": [60, 20, 40, 10],

            "bluetoothPieChartLabels": ["Living Room", "Bedroom", "Bathroom", "Kitchen", "Outside"],
            "bluetoothPieChartData": [55, 70, 15, 20, 50],

            "dietAnalysis": "Idk some body of text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", # we dont have the actual data yet
        }

        return flask.render_template('index.html', data=data)

    else:
        return flask.render_template('report-not-found.html')

@app.route('/customizeReport')
def customizeReport():
    return flask.render_template('customizeReport.html')

@app.errorhandler(404)
def page_not_found(e):
    return flask.render_template('404.html'), 404

app.run(debug=True, host='0.0.0.0' , port=8080)