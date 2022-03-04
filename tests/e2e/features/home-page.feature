Feature: Homepage

  Scenario: I navigate to the documentation
    Given I navigate to the homepage
    When The page is loaded
    And I click on the documentation button
    Then I see the documentation page
