describe("json", function () {
    var json = {
        "trains": [
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": null,
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T18:04:00",
                "ExpectedDateTime": "2015-06-26T18:04:00",
                "DisplayTime": "Nu",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "36",
                "Destination": "Märsta",
                "SiteId": 9510,
                "Key": "18042"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:10:00",
                "ExpectedDateTime": "2015-06-26T18:10:00",
                "DisplayTime": "5 min",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "36",
                "Destination": "Södertälje C",
                "SiteId": 9510,
                "Key": "18101"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": "Arlanda C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T18:12:00",
                "ExpectedDateTime": "2015-06-26T18:12:00",
                "DisplayTime": "7 min",
                "Deviations": [
                    {
                        "Text": "Resa förbi Arlanda C kräver både UL- och SL- biljett.",
                        "Consequence": "INFORMATION",
                        "ImportanceLevel": 5
                    }
                ],
                "TransportMode": "TRAIN",
                "LineNumber": "38",
                "Destination": "Uppsala C",
                "SiteId": 9510,
                "Key": "18122"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:13:00",
                "ExpectedDateTime": "2015-06-26T18:13:00",
                "DisplayTime": "8 min",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "35",
                "Destination": "Västerhaninge",
                "SiteId": 9510,
                "Key": "18131"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:17:00",
                "ExpectedDateTime": "2015-06-26T18:17:00",
                "DisplayTime": "12 min",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "38",
                "Destination": "Tumba",
                "SiteId": 9510,
                "Key": "18171"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": null,
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T18:16:00",
                "ExpectedDateTime": "2015-06-26T18:18:32",
                "DisplayTime": "13 min",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "35",
                "Destination": "Kungsängen",
                "SiteId": 9510,
                "Key": "18162"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": null,
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T18:19:00",
                "ExpectedDateTime": "2015-06-26T18:19:00",
                "DisplayTime": "14 min",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "36",
                "Destination": "Märsta",
                "SiteId": 9510,
                "Key": "18192"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:25:00",
                "ExpectedDateTime": "2015-06-26T18:25:00",
                "DisplayTime": "20 min",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "36",
                "Destination": "Södertälje C",
                "SiteId": 9510,
                "Key": "18251"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:28:00",
                "ExpectedDateTime": "2015-06-26T18:28:00",
                "DisplayTime": "23 min",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "35",
                "Destination": "Västerhaninge",
                "SiteId": 9510,
                "Key": "18281"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": null,
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T18:31:00",
                "ExpectedDateTime": "2015-06-26T18:31:00",
                "DisplayTime": "26 min",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "35",
                "Destination": "Bålsta",
                "SiteId": 9510,
                "Key": "18312"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": null,
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T18:34:00",
                "ExpectedDateTime": "2015-06-26T18:34:00",
                "DisplayTime": "29 min",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "36",
                "Destination": "Märsta",
                "SiteId": 9510,
                "Key": "18342"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:40:00",
                "ExpectedDateTime": "2015-06-26T18:40:00",
                "DisplayTime": "18:40",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "36",
                "Destination": "Södertälje C",
                "SiteId": 9510,
                "Key": "18401"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": "Arlanda C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T18:42:00",
                "ExpectedDateTime": "2015-06-26T18:42:00",
                "DisplayTime": "18:42",
                "Deviations": [
                    {
                        "Text": "Resa förbi Arlanda C kräver både UL- och SL- biljett.",
                        "Consequence": "INFORMATION",
                        "ImportanceLevel": 5
                    }
                ],
                "TransportMode": "TRAIN",
                "LineNumber": "38",
                "Destination": "Uppsala C",
                "SiteId": 9510,
                "Key": "18422"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:43:00",
                "ExpectedDateTime": "2015-06-26T18:43:00",
                "DisplayTime": "18:43",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "35",
                "Destination": "Västerhaninge",
                "SiteId": 9510,
                "Key": "18431"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": null,
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T18:46:00",
                "ExpectedDateTime": "2015-06-26T18:46:00",
                "DisplayTime": "18:46",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "35",
                "Destination": "Kungsängen",
                "SiteId": 9510,
                "Key": "18462"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:47:00",
                "ExpectedDateTime": "2015-06-26T18:47:00",
                "DisplayTime": "18:47",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "38",
                "Destination": "Älvsjö",
                "SiteId": 9510,
                "Key": "18471"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": null,
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T18:49:00",
                "ExpectedDateTime": "2015-06-26T18:49:00",
                "DisplayTime": "18:49",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "36",
                "Destination": "Märsta",
                "SiteId": 9510,
                "Key": "18492"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:55:00",
                "ExpectedDateTime": "2015-06-26T18:55:00",
                "DisplayTime": "18:55",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "36",
                "Destination": "Södertälje C",
                "SiteId": 9510,
                "Key": "18551"
            },
            {
                "JourneyDirection": 1,
                "SecondaryDestinationName": "Stockholm C",
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5021,
                "StopPointDesignation": "2",
                "TimeTabledDateTime": "2015-06-26T18:58:00",
                "ExpectedDateTime": "2015-06-26T18:58:00",
                "DisplayTime": "18:58",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "35",
                "Destination": "Västerhaninge",
                "SiteId": 9510,
                "Key": "18581"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": null,
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T19:01:00",
                "ExpectedDateTime": "2015-06-26T19:01:00",
                "DisplayTime": "19:01",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "35",
                "Destination": "Bålsta",
                "SiteId": 9510,
                "Key": "19012"
            },
            {
                "JourneyDirection": 2,
                "SecondaryDestinationName": null,
                "StopAreaName": "Karlberg",
                "StopAreaNumber": 5021,
                "StopPointNumber": 5022,
                "StopPointDesignation": "3",
                "TimeTabledDateTime": "2015-06-26T19:04:00",
                "ExpectedDateTime": "2015-06-26T19:04:00",
                "DisplayTime": "19:04",
                "Deviations": null,
                "TransportMode": "TRAIN",
                "LineNumber": "36",
                "Destination": "Märsta",
                "SiteId": 9510,
                "Key": "19042"
            }
        ],
        "StopAreaName": "Karlberg",
        "SiteId": 9510
    };

    it("southwest", function () {
        expect(_.uniq(_.map(southwest(json), 'Destination'))).toEqual(['Södertälje C', 'Tumba']);
    });

    it("southeast", function () {
        expect(_.uniq(_.map(southeast(json), 'Destination'))).toEqual(['Västerhaninge']);
    });

    it("connecting", function () {
        expect(southeast(json)[0].ExpectedDateTime).toEqual('2015-06-26T18:13:00');
        expect(findConnecting(southeast(json)[0], southwest(json)).ExpectedDateTime).toEqual('2015-06-26T18:17:00')
    });

    it("diff", function () {
        var from = southeast(json)[0];
        var to = findConnecting(from, southwest(json));
        expect(diff(to, from)).toEqual(240)
    });

    it("diff with seconds", function () {
        var from = {ExpectedDateTime: '2015-07-09T08:18:00'};
        var to = {ExpectedDateTime: '2015-07-09T08:20:49'};
        expect(diff(to, from)).toBe(169)
    });

    it("diff across hours", function () {
        var from = {ExpectedDateTime: '2015-07-09T07:49:00'};
        var to = {ExpectedDateTime: '2015-07-09T08:04:07'};
        expect(diff(to, from)).toBe(907)
    });

    function nows(lines) {
        return new RegExp(lines.join('\\s*'));
    }

    it("no matching", function () {
        var train = {
            ExpectedDateTime: '2015-07-09T07:49:00',
            Destination: 'Tumba'
        };
        expect(showTrain(train, []))
            .toMatch(nows(['<tr>',
                '<td>', '07:49:00', 'Tumba', '</td>',
                '</tr>']))
    });

    it("matching", function () {
        var train = {
            ExpectedDateTime: '2015-07-10T17:50:00',
            Destination: 'Stockholm'
        };
        var match = {
            ExpectedDateTime: '2015-07-10T17:54:00',
            Destination: 'Södertälje'
        };
        expect(showTrain(train, [match]))
            .toMatch(nows([
                '<tr>',
                '<td>', '17:50:00 Stockholm', '</td>',
                '<td>', '17:54:00 Södertälje', '</td>',
                '<td>', '240', '</td>',
                '</tr>']))
    });

    it("bad connection", function () {
        var train = {
            ExpectedDateTime: '2015-07-10T17:50:00',
            Destination: 'Stockholm'
        };
        var match = {
            ExpectedDateTime: '2015-07-10T18:02:00',
            Destination: 'Södertälje'
        };
        expect(showTrain(train, [match])).toMatch(nows([
            '<tr class="bad">',
            '<td>', '17:50:00 Stockholm', '</td>',
            '<td>', '18:02:00 Södertälje', '</td>',
            '<td>', '720', '</td>',
            '</tr>']))
    });

    it("expectedTime removes date", function () {
        var train = {
            ExpectedDateTime: '2015-07-10T17:50:00',
            Destination: 'Stockholm'
        };
        expect(expectedTime(train)).toBe('17:50:00');
    });
});
