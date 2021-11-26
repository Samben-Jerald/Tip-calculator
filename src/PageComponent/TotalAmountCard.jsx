import React from 'react'
import Button from '../Component/Button'
import Text from '../Component/Text'
import Cost from '../Component/Cost'
import Label from '../Component/label'

const TotalAmountCard = (props) => {
    return (
        <div className="cost-container">
        <div className="total-cost-container">
          <div className="total-amount">
            <div>
              <Text>Tip Amount</Text>
              <br/>
              <Label>/ person</Label>
            </div>
            <div>
              <Cost>{props.tipPerPerson}</Cost>
            </div>
          </div>
          <div className="total-amount">
            <div>
              <Text>Total</Text>
              <br/>
              <Label>/ person</Label>
            </div>
            <div>
              <Cost>{props.costPerPerson}</Cost>
            </div>
          </div>
        </div>
        <div className="reset-button">
          <Button attributes={{
            onClick:props.submitHandler
          }}>Reset Me</Button>
        </div>
      </div>
    )
}

export default TotalAmountCard
