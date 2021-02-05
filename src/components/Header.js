import React from 'react';

function Header() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      fontSize: 70
    }
    
    if (hours < 12) {
      timeOfDay = "Morning"
      styles.color = "#F4F1C9"
      styles.backgroundColor = "#8da399"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon"
      styles.color = "#333"
      styles.backgroundColor = "#c3b091"
    } else {
      timeOfDay = "Evening"
      styles.color = "#FBFAF5"
      styles.backgroundColor = "#7f7f7f"
    }
    
    return (
      <h1 className="headerWelcome" style={styles}>Good {timeOfDay}!</h1>
    )
  }

export default Header;